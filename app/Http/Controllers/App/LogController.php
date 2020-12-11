<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\BaseController;
use App\Repositories\AddRepository;
use App\Repositories\UserRepository;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

class LogController extends BaseController
{
    /**
     * @var UserRepository
     */
    public $userRepository;

    public function __construct()
    {
        $this->userRepository = app(UserRepository::class);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function auth(Request $request)
    {
        try {
            /*
             *  AUTH
            */
            $user = $this->userRepository->getUser($request->token);

            /*
             * VERIFICATION
             */
            $lastLogReq = AddRepository::getLogRequest($user->id);
            if ($request->log_answer && $lastLogReq->access == 0) {

                if ($lastLogReq->answer == $request->log_answer) {
                    AddRepository::changeLogRequest($lastLogReq->id, 1);
                    AddRepository::setEnter($user->id, $request->location);
                    return response(['log' => 'login']);
                } else {
                    AddRepository::changeLogRequest($lastLogReq->id, -1);
                    return response(['log' => 'rejected']);
                }

            } else if ($lastLogReq->access == 0) {

                return response(['log' => 'verification',
                                  'options' => json_decode($lastLogReq->log)
                                ]);
            }
            $lastLocation = AddRepository::getLastEnter($user->id);//check last
            if ($lastLocation->location != $request->location['location']) {

                $entrs = AddRepository::getRandomEnter($user->id, $request->location);

                $entrs[] = $lastLocation;
                shuffle($entrs);

                AddRepository::setLogRequest($user->id, $lastLocation->id, json_encode($entrs));
                return response(['log' => 'verification',
                    'options' => $entrs
                ]);
            }


            AddRepository::setEnter($user->id, $request->location);

            return response(['log' => 'login']);

        } catch (\Exception $e) {
            /*
             * REGISTER
             */
            $user = $this->userRepository->regUser($request);
            AddRepository::setEnter($user->id, $request->location);
            return response(['log' => 'create']);
        }
    }

    public function salt(Request $request)
    {
        try {

        } catch (\Exception $e) {
            return response(['error' => 'user not found']);
        }
        $user = $this->userRepository->getForUpdate($request->token);

        $data = $request->all();

        $result = $user
            ->fill($data)
            ->save();

        if ($result) {
            return response()->json(['update' => true]);
        } else {
            return response()->json(['update' => false]);
        }
    }


}

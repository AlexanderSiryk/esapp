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
            * LOGIN
            */
            $user = $this->userRepository->getUser($request->token);
            AddRepository::setLogRequest($user->id, $request->location);
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


    public function checkLocation(Request $request)
    {
        try {
            /*
            * LOCATION VERIFICATION
            */
            $deviation = 0.03;
            $user = $this->userRepository->getUser($request->token);
            $lastLogReq = AddRepository::getLogRequest($user->id);
            $locating = json_decode($lastLogReq->current_location);

            if (abs($locating->lat - $request->lat) <= $deviation &&
                abs($locating->lng - $request->lng) <= $deviation) {

                AddRepository::changeLogRequest($user->id, 1);
                AddRepository::setEnter($user->id, $locating);
                return response(['success' => 'true']);
            }
            throw  new \Exception('undetected');
        } catch (\Exception $e) {
            AddRepository::changeLogRequest($user->id, -1);
            return response(['success' => 'false']);
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

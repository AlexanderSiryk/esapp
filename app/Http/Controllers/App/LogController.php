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
            $user = $this->userRepository->getUser($request->token);
            AddRepository::setEnter($user->id, $request->location);
            return response(['log' => 'login']);
        } catch (\Exception $e){
            $user = $this->userRepository->regUser($request);
            AddRepository::setEnter($user->id, $request->location);
            return response(['log' => 'create']);
        }
    }

    public function salt(Request $request)
    {
        try{

        }catch (\Exception $e){
            return response(['error' => 'user not found']);
        }
        $user = $this->userRepository->getForUpdate($request->token);

        $data = $request->all();

        $result = $user
            ->fill($data)
            ->save();

        if($result){
            return response()->json(['update' => true]);
        }
        else{
            return response()->json(['update' => false]);
        }
    }


}

<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\BaseController;
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

        $user = $this->userRepository->getUser($request->token);
        if($user == NULL){
            //return $user;
            return response()->json($user->toArray());
        }
        else{
            $user = $this->userRepository->regUser($request);
            return response(['log' => 'create']);
        }
    }

    public function salt(Request $request)
    {

        $user = $this->userRepository->getUser($request->token);
        if($user == NULL){
            //return $user;
            return response()->json($user->toArray());
        }
        else{
            $user = $this->userRepository->regUser($request);
            return response(['log' => 'create']);
        }
    }


}

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
    public function auth($request)
    {
        $data = json_decode($request);

        $user = $this->userRepository->getUser($data['token']);
        if($user){
            //return $user;
            return response()->json($user->toArray());
        }
        else{
            $user = $this->userRepository->regUser($data);
            return response()->json($user->toArray());
        }
    }


}

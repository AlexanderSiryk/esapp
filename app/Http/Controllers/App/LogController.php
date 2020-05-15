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

        if(count($user) != 0){

            return response(['log' => 'login']);
        }
        else{
            $user = $this->userRepository->regUser($request);
            return response(['log' => 'create']);
        }
    }

    public function salt(Request $request, $token)
    {

        $user = $this->userRepository->getForUpdate($request->token);

        if(empty($user)){
            return response(['error' => 'user not found']);
        }

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

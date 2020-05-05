<?php

namespace App\Repositories;
use App\Models\Account as Model;
use App\Models\User;

class UserRepository extends BaseRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getUser($token)
    {

        $result = $this->startCondition()
                        ->select()
                        ->where('token' , $token)
                        ->get();

        return $result;
    }

    /*
     * @var Google request
     */
    public function regUser($data){
        $user = new User();
        //fix names google request
        $user->name = $data->name;
        $user->token = $data->token;
        $user->salt = 'salt';
        $user->save();

        if($user){
            return true;
        }
        return false;

    }

}


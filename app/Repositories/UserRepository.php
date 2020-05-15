<?php

namespace App\Repositories;
use App\Models\User;
use App\Models\User as Model;

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
        $user->salt = 'Not defined';
        $user->save();

        if($user){
            return true;
        }
        return false;
    }


    public function getForUpdate($token)
    {
        $result = $this->startCondition()
                        ->where('token', $token)
                        ->first();

        return $result;
    }

    public function getIdByToken($token)
    {
        $columns = ['id'];
        $result = $this->startCondition()
            ->select($columns)
            ->where('token', $token)
            ->first()
            ->id;

        return $result;
    }



}

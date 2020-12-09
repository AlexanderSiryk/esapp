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
            ->limit(1)
            ->first();
        if (!$result) throw  new \Exception('User not found');

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
        $save = $user->save();

        if($save){
            return $user;
        }
        throw new \Exception('upssss......');
    }


    public function getForUpdate($token)
    {
        $result = $this->startCondition()
                        ->where('token', $token)
                        ->limit(1)
                        ->first();

        if(!$result) throw new \Exception('User not found');

        return $result;
    }

    public function getIdByToken($token)
    {
        $columns = ['id'];
        $result = $this->startCondition()
            ->select($columns)
            ->where('token', $token)
            ->first();

        if(!$result) throw new \Exception('User not found');
        return $result->id;
    }



}

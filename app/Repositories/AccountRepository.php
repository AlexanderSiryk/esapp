<?php

namespace App\Repositories;
use App\Models\Account as Model;

class AccountRepository extends BaseRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getAllAccounts($userId)
    {
        $columns = ['id','name','login','password','tag'];

        $result = $this->startCondition()
                        ->select($columns)
                        //->where('user_id' , $userId)
                        ->where('user_id', '!=', 0)
                        ->get();

        return $result;
    }

    public function getAccountForEdit($accountId, $userId)
    {
        $columns = ['id','name','login','password','tag'];

        $result = $this->startCondition()
                        ->select($columns)
                        ->where('user_id', $userId)
                        ->where('id', $accountId)
                        ->get();

        return $result;
    }

    public function getForUpdate($accountId)
    {
        $result = $this->startCondition()->find($accountId);

        return $result;
    }

}


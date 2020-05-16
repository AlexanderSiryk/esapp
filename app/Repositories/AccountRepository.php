<?php

namespace App\Repositories;
use App\Models\Account as Model;

class AccountRepository extends BaseRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getAllAccounts($token)
    {
        $columns = ['id','name','login','password','tag'];

        $result = $this->startCondition()
                        ->select($columns)
                        ->where('token', $token)
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


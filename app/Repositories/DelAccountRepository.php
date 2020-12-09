<?php

namespace App\Repositories;

use App\Models\DelAccount as Model;

class DelAccountRepository extends BaseRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }



    public function getAllAccounts($id)
    {
        $columns = ['del_accounts.id', 'del_accounts.name', 'login', 'password', 'del_accounts.name as tag','delete_at'];

        $result = $this->startCondition()
            ->select($columns)
            ->where('del_accounts.user_id', $id)
            ->join('tags', 'del_accounts.tag_id', '=', 'tags.id')
            ->get();

        if (!$result) throw new \Exception('No deleted records');

        return $result;
    }


    public function setDelAccount($account)
    {
        $delAcc = new Model();
        $delAcc->id = $account->id;
        $delAcc->name = $account->name;
        $delAcc->login = $account->login;
        $delAcc->password = $account->password;
        $delAcc->tag_id = $account->tag_id;
        $delAcc->user_id = $account->user_id;
        $delAcc->delete_at = time()+2419200;

        return $delAcc->save();
    }


    public function getForDelete($accountId, $userId)
    {
        $result = $this->startCondition()
                       ->where([['id',$accountId],
                                ['user_id', $userId]])
                        ->limit(1)
                        ->first();

        if(!$result) throw new \Exception('DelAccount not found.');

        return $result;
    }


}


<?php

namespace App\Repositories;

use App\Models\Account as Model;

class AccountRepository extends BaseRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getAllAccounts($id)
    {
        $columns = ['accounts.id', 'accounts.name', 'login', 'password', 'tags.name as tag'];

        $result = $this->startCondition()
            ->select($columns)
            ->where('accounts.user_id', $id)
            ->join('tags', 'accounts.tag_id', '=', 'tags.id')
            ->get();

        if (!$result) throw new \Exception('Accounts not found');

        return $result;
    }

    public function getAccountForEdit($accountId, $userId)
    {
        $columns = ['id', 'name', 'login', 'password', 'tag'];

        $result = $this->startCondition()
            ->select($columns)
            ->where([['user_id', $userId],
                ['id', $accountId]])
            ->get();

        if(!$result) throw new \Exception('Row not found.');

        return $result;
    }


    public function getForUpdate($accountId, $userId)
    {
        $result = $this->startCondition()
                       ->where([['id',$accountId],
                                ['user_id', $userId]])
                        ->limit(1)
                        ->first();

        if(!$result) throw new \Exception('Account not found.');

        return $result;
    }


    public function createAccount($request, $userId) {
        //get tag id
        $tagRep = new TagRepository();
        $tagId = $tagRep->getIdTag($request['tag'], $userId);

        //create new account
        $account = new Model();
        $account->name = $request['name'];
        $account->login = $request['login'];
        $account->password = $request['password'];
        $account->tag_id = $tagId;
        $account->user_id = $userId;
        $account->save();

        return $account;
    }
    public function updateAccount($request, $userId, $id) {
        //get tag id
        $tagRep = new TagRepository();
        $tagId = $tagRep->getIdTag($request['tag'], $userId);

        //update account
        $account = $this->getForUpdate($id,$userId);
        $account->name = $request['name'];
        $account->login = $request['login'];
        $account->password = $request['password'];
        $account->tag_id = $tagId;
        $account->user_id = $userId;
        $account->save();

        return $account;
    }

}


<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\BaseController;
use App\Models\Account;
use App\Repositories\AccountRepository;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

class AccountController extends BaseController
{
    /**
     * @var AccountRepository
     */
    public $accountRepository;
    /**
     * @var UserRepository
     */
    public $userRepository;

    public function __construct()
    {
        $this->accountRepository = app(AccountRepository::class);
        $this->userRepository = app(UserRepository::class);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user_id = $this->userRepository->getIdByToken($request->token);
        $accounts = $this->accountRepository->getAllAccounts($user_id);
        if($accounts) {
            return response()->json($accounts->toArray());
        }
        else{
            return response()->json(['accounts' => null]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $account = $this->accountRepository->getAccountForEdit($id,Cookie::get('token'));

        return response()->json($account->toArray());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $account = $this->accountRepository->getForUpdate($id);

        $user_id = $this->userRepository->getIdByToken($request->token);

        if(empty($account) || $user_id != $account->user_id ){
            return back()->withErrors('error','error');
        }


        $data = $request->all();

        $result = $account
                    ->fill($data)
                    ->save();

        if($result){
            return response(['update' => true]);
        }
        else{
            return response(['update' => false]);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */


    public function store(Request $request)
    {
        $user_id = $this->userRepository->getIdByToken($request->token);

        $account = new Account();
        $account->name = $request->name;
        $account->login = $request->login;
        $account->password = $request->password;
        $account->tag = $request->tag;
        $account->user_id = $user_id;
        $account->save();

        if($account){
            return response()->json(['id' => $account->id]);
        }
        else{
            return response()->json(['create' => false]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {

        $account = Account::findOrFail($request->id);
        $user_id = $this->userRepository->getIdByToken($request->token);

        if($account->user_id == $user_id){
            $account = $account->delete();
        }


        if($account === true){
            return response()->json(['delete' => true]);
        }else{
            return response()->json(['delete' => false]);
        }
    }
}

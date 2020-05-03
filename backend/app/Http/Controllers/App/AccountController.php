<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\BaseController;
use App\Models\Account;
use App\Repositories\AccountRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

class AccountController extends BaseController
{
    /**
     * @var AccountRepository
     */
    public $accountRepository;

    public function __construct()
    {
        $this->accountRepository = app(AccountRepository::class);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $accounts = $this->accountRepository->getAllAccounts($request->token);
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

        if(empty($account)){
            return back()->withErrors('error','error');
        }

        $data = $request->all();

        $result = $account
                    ->fill($data)
                    ->save();

        if($result){
            return response()->json(['update' => true]);
        }
        else{
            return response()->json(['update' => false]);
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
    public function store($request)
    {

        $data = json_decode($request);

        $account = new Account();
        $account->name = $data['name'];
        $account->login = $data['login'];
        $account->password = $data['password'];
        $account->tag = $data['tag'];
        $account->save();

        if($account){
            return response()->json(['create' => true]);
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
    public function destroy($id)
    {
        $account = Account::findOrFail($id);
        $account->delete();

        if($account){
            return response()->json(['delete' => true]);
        }else{
            return response()->json(['delete' => false]);
        }
    }
}

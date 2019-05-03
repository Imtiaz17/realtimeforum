<?php

namespace App\Http\Controllers;

use App\Model\Reply;

class LikeController extends Controller
{
   /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('jwt');
    }
    public function like(Reply $reply)
   {
    $reply->like()->create([
        'user_id'=>auth()->id()
       
    ]);
   }
   public function unlike (Reply $reply)
   {
       $reply->like()->where('user_id',auth()->id())->first()->delete();
   }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;

    protected $fillable = ['menu_id'];

    public function menu()
    {
        return $this->hasOne(Menu::class, 'id', 'menu_id');
    }
}

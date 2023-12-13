<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class MenuTest extends TestCase
{

    public function testCreateSuccess()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
}

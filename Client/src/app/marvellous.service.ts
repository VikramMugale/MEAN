import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MarvellousService 
{
    constructor(private server : HttpClient)
    {}  
    public GetBatches()
    {
        return this.server.get("http://localhost:5100/getBatches");
    }
}

import express, {Router} from 'express';
import path from 'path';

const routes = new Router();

routes.get('/', (req,res)=>{
  res.json({"ok":true});
});

export default routes;
import express, { Router } from 'express';
import path from 'path';

const routes = new Router();

routes.use('/', express.static(path.resolve(__dirname, '..', 'public')));

export default routes;

import axios from "axios";
import {getTodosUrl} from './config';

export const fetchTodosList = axios.get(getTodosUrl);

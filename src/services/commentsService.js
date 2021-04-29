import axios from "axios";
import {getCommentsUrl} from './config';

export const fetchCommentsList = axios.get(getCommentsUrl);

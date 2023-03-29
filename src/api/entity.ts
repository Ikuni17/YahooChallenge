import axios from 'axios';
import {useQuery, useMutation, useQueryClient} from 'react-query';

const API_BASE = 'http://localhost:8000/api/';
const APP_API = `${API_BASE}entity`;
const QUERY_KEY = 'entity';

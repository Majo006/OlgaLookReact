import axios from "axios";

const RECORDATORIO_BASE_REST_API_URL = "http://localhost:8083/api/recordatorio/all";

class RecordatorioService {
    getAllRecordatorio() {
        return axios.get(RECORDATORIO_BASE_REST_API_URL);
    }
}

export default new RecordatorioService();
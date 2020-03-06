import api from 'api';

class UserService {
  static scanQR(qrInfo) {
    return api.post('QrCode/QrConsumed', qrInfo);
  }
}

export default UserService;

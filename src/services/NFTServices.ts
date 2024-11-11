import { INFT, INFTServices } from '@/interfaces/INFTServices';

const DB: INFT[] = [
  { id: '1', name: 'jimao' },
  { id: '2', name: 'btc' },
  { id: '3', name: 'eth' },
];

class NFTServices implements INFTServices {
  public list(): INFT[] {
    return DB;
  }
}

export default NFTServices;

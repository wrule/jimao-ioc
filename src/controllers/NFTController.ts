import { INFTServices } from '@/interfaces/INFTServices';

class NFTController {
  public constructor(private nftService: INFTServices) { }

  public list() {
    return this.nftService.list();
  }
}

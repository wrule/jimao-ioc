
export
interface INFT {
  id: string;
  name: string;
}

export
interface INFTServices {
  list(): INFT[];
}

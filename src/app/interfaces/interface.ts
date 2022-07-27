export interface Homepage{
  data: {
    attributes: {
      Name: string;
      bannerimage:{
        data: {
          attributes: {
            url: string;
          }
        }
      }
    }
  }
}

export interface Register{
  user: {
    confirmed: boolean;
  }
}

export interface Special{
  id: number;
  attributes: {
    Title: string;
    description: string;
  }
}

export interface Specials{
  data:Special[];
}

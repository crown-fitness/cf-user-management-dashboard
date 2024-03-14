enum EnumEnployee{
    'beginner',
    'intermediate',
    'advance'
}

enum EnumDevice{
    'android',
    'ios',
    'web'
}

export interface IRegister {
  first_name:string;
  last_name: string;
  email: string;
  password:string;
  bio: string;
  age: string;
  sex: string;
  crown_member: boolean;
  experience: EnumEnployee;
  device: EnumDevice;
}

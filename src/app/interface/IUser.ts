export interface IUser {
    _id: string
    first_name: string
    last_name: string
    email: string
    password: string
    passwordResetToken: string
    passwordResetExpires: string
    bio: string
    accountCreated: string
    age: number
    sex: string
    device: string
    crown_member: boolean
    experience: string
    isVerified: boolean
    isAdmin: boolean
    isLoggedIn: boolean
    avatarProfile: AvatarProfile
    settings: Settings

  }
  
  export interface AvatarProfile {
    type: string
    data: any[]
  }
  
  export interface Settings {
    theme: string
    weight: string
    distance: string
    size: string
  }
  
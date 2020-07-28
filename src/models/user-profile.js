export default class UserProfile {

  constructor(profile) {
    this.id = profile.id;
    this.avatarUrl = profile.avatar_url;
    this.email = profile.email;
    this.name = profile.name;
  }

  static parseProfile(profile) {
    return new UserProfile(profile);
  }
}

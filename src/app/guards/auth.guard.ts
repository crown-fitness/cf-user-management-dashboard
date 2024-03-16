import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

// Protects Authenticated Routes
export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const ls = new LocalStorageService();

  // const currentUser = JSON.parse((ls.getItemFromStorage('currentUser')|| '{}'))
  if (ls.getItemFromStorage('currentUser') === null) {
    return false;
  }

  return true;
};

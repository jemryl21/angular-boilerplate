import { AccountService} from '@app/_services';

export function appInitializer(AccountService: AccountService) {
    return () => new Promise (resolve => {
        //
        AccountService.refreshToken()
            .subcribe()
            .add(resolve);
    });
}
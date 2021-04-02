import account from '../steps/authorization/authorization';
import vacancy from '../steps/vacancy/vacancy'
import profile from '../steps/profile/profile'


describe('test vacancy', () => {
    beforeEach(() => {
        account.open('https://www.studhunt.ru/auth');
        account.login();

        profile.openProfile();
        profile.checkUserEmail();
    });

    it('Ошибка при отправке вакансии с пустыми полями', () => {

        vacancy.openVacancyCreation();
        vacancy.createEmpty();
    });

    it('Ошибка при вводе зарплаты, когда min > max', () => {

        vacancy.openVacancyCreation();
        vacancy.createWithInvalidSalary();
    });
});

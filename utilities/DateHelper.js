export class DateHelper {

    static today() {
        return new Date().toISOString().split('T')[0];
    }
}
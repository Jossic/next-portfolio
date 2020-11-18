import experiences from './data.js'
import Experience from '../models/experienceModel.js'

class FakeDB {

    async clean() {
        await Experience.deleteMany({});
    }

    async addData() {
        await Experience.create(experiences);
    }

    async populate() {
        await this.clean();
        await this.addData();
    }
}

export default new FakeDB();
"use strict";

class Collection {
  constructor(model) {
    this.model = model;
  }

  async read(id, option = {}) {
    let record = null;

    if (id) {
      record = await this.model.findOne({ where: { id: id } });
    } else {
      record = await this.model.findAll();
    }

    return record;
  }

  async create(obj) {
    try {
      let record = await this.model.create(obj);
      return record;
    } catch (err) {
      console.log(`Error creating a new record: ${this.model.name}`);
      return err;
    }
  }

  async update(id, obj) {
    try {
      if (!id) throw new Error(`The id you send is not exists!!!`);
      const record = await this.model.update(obj, { where: { id } });
      const updatedRecord = await this.read(id);
      return updatedRecord;
    } catch (err) {
      console.log(`Error while updating a record: ${this.model.name}`);
      return err;
    }
  }

  async delete(id) {
    try {
      if (!id) throw new Error(`The id you send is not exists!!!`)
      const record = await this.read(id)
      console.log(record)
      const deletedRecord = await this.model.destroy({ where: { id } });
      return record;

    } catch (e) {
      console.log(`Error while deleting a record: ${this.model.name}`);
      return e;
    }
  }

  async readFoodIng(id, model) {
    const records = await this.model.findOne({
      where: { id },
      include: model
    });
    return records;
  }


}

module.exports = Collection;
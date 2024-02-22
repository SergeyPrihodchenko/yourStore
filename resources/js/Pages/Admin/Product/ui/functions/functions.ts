import { Option, Value } from "@/Entities/Option/model/types";

export const mergeValues = (options: Option[], values: Value[]) => {

    options.forEach(option => {

      option.values = []

        values.forEach(value => {
          if(option.id == value.option_id) {
            option.values?.push(value);
          }
        })
    });
  }
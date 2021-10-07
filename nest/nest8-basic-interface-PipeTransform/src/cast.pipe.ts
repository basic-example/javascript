import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CastPipe implements PipeTransform {
  transform(data, metadata: ArgumentMetadata) {
    if (typeof data !== 'object') {
      return data;
    }

    Object.keys(data).forEach((key) => {
      let value = data[key];

      if (value == 'null') {
        value = null;
      } else if (value == parseInt(value)) {
        value = parseInt(value);
      } else if (value == 'true') {
        value = true;
      } else if (value == 'false') {
        value = false;
      }

      data[key] = value;
    });

    console.log('casted data', data);

    return data;
  }
}

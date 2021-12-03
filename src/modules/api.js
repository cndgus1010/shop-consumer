import axios from 'axios';

import { filePath } from './util';

export const bannerApi = async (id) => {
  try {
    const { data } = await axios.get(process.env.REACT_APP_BANNER_URL + '?id=' + id);
    console.log(data);
    const { content: contents, files } = data;
    const rs = contents.split('^^').map((v, i) => {
      let [title, price, content, link, pos] = v.split('|');
      return {
        title,
        price,
        content,
        link,
        pos,
        file: filePath(files[i]),
      };
    });
    return rs;
  } catch (err) {
    console.log(err);
  }
};

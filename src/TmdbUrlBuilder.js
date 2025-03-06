import { TmdbConfig } from "./tmdb";

export class TmdbUrlBuilder {
  constructor() {
    this.pathComponents = [];
    this.params = { ...TmdbConfig.defaultParams };
  }

  addPath(component) {
    this.pathComponents.push(component);
    return this;
  }

  setParam(key, value) {
    this.params[key] = value;
    return this;
  }

  build() {
    const url = new URL(TmdbConfig.baseUrl);
    url.pathname += this.pathComponents.join("/");
    url.search = new URLSearchParams({
      ...this.params,
    });
    return url;
  }
}

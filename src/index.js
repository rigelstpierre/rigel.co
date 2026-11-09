export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === "www.rigel.co" || url.protocol === "http:") {
      url.hostname = "rigel.co";
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};

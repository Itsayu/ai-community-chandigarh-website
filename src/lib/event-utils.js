function stripHtmlTags(html = "") {
  return html.replace(/<[^>]*>/g, "").replace(/&nbsp;/gi, " ").replace(/\s\s+/g, " ").trim();
}

export function formatEventData(rawEvent = {}) {
  const {
    id = null,
    name = "Untitled Event",
    start_time = null,
    event_type = "",
    event_locations = [],
    location = null,
    description = "",
    slug = null,
    url = null,
    header_image = null,
    community = null,
  } = rawEvent;

  const dateOptions = { year: "numeric", month: "short", day: "numeric" };
  const date = start_time ? new Date(start_time).toLocaleDateString("en-US", dateOptions) : "TBD";

  const type = typeof event_type === "string" && event_type.length > 0
    ? event_type.charAt(0).toUpperCase() + event_type.slice(1)
    : "Event";

  let locationAddress = "TBD";
  if (location && typeof location === "string" && location.trim()) {
    locationAddress = location.trim();
  } else if (Array.isArray(event_locations) && event_locations.length > 0) {
    const addr = (event_locations[0].address || "").split(",").map(s => s.trim()).filter(Boolean);
    locationAddress = addr.length ? addr.slice(0, 3).join(", ") + (addr.length > 3 ? "..." : "") : "TBD";
  } else if (community && community.name) {
    locationAddress = community.name;
  } else {
    locationAddress = type.toLowerCase() === "online" ? "Online" : "TBD";
  }

  const clean = stripHtmlTags(description);
  const shortDescription = clean.length > 150 ? clean.slice(0, 150).trim() + "..." : clean;

  const hrefMatch = description && typeof description === "string" ? description.match(/href\s*=\s*["']([^"']+)["']/i) : null;
  const link = hrefMatch ? hrefMatch[1] : (url || (slug ? `https://json.commudle.com/e/${slug}` : "#"));

  let imageUrl = null;
  if (header_image && typeof header_image === "object") {
    imageUrl = header_image.i500 || header_image.i350 || header_image.i320 || header_image.url || null;
  } else if (rawEvent.image_url) {
    imageUrl = rawEvent.image_url;
  } else if (rawEvent.banner) {
    imageUrl = rawEvent.banner;
  }

  return {
    id,
    title: name || "Untitled Event",
    date,
    type,
    description: shortDescription,
    location: locationAddress,
    link,
    imageUrl,
    slug: slug || null,
    raw: rawEvent
  };
}

import { Layout } from "../../components/Layout";
import { personalization } from "../../config/personalization";
import "./styles.css";

function MyAccount() {
  const owner = personalization?.owner ?? {};
  const profileImage =
    owner.avatarUrl || "https://avatars.githubusercontent.com/u/0?v=4";
  const displayName =
    owner.fullName || "Add your name in src/config/personalization.js";
  const username = owner.username || "@yourhandle";
  const role = owner.role || "Role / Title";
  const bio =
    owner.bio ||
    "Use src/config/personalization.js to describe yourself and replace this placeholder text.";
  const location = owner.location || "City, Country";
  const contactLinks = [owner.githubUrl, owner.website]
    .filter(Boolean)
    .map((url) => {
      try {
        return {
          url,
          label: new URL(url).hostname.replace("www.", ""),
        };
      } catch (error) {
        return { url, label: url };
      }
    });

  return (
    <>
      <Layout>
        <p className=" m-4">My Account</p>
        <div className="flex flex-col items-center justify-center w-2/4 h-3/4 border border-black rounded-lg MyAccount p-8">
          <figure className=" flex items-center justify-center flex-col text-center">
            <p className="mb-5 mt-5 font-medium">
              {owner.fullName ? "About the creator" : "Make this page yours"}
            </p>

            <img
              src={profileImage}
              alt={displayName}
              className="border border-slate-950 rounded-full w-40 h-40 object-cover"
            />

            <p className="font-bold mt-4 text-xl">{displayName}</p>
            <p className="text-black/70 text-sm">{role}</p>
            <p className="text-black/60 text-sm mt-2 max-w-sm">{bio}</p>
            <p className="text-black/50 text-xs mt-2">{location}</p>
            <p className="text-black/60 mt-2">{username}</p>

            {contactLinks.length > 0 && (
              <ul className="flex flex-col gap-2 mt-4">
                {contactLinks.map(({ label, url }) => (
                  <li key={url}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-light underline hover:text-black"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </figure>
        </div>
      </Layout>
    </>
  );
}

export default MyAccount;

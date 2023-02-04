import { useLoaderData, Link } from "@remix-run/react";

const Leadership = () => {
  const { members } = useLoaderData();
  console.log("members", useLoaderData());
  return (
    <div className="center-container max-w-[1070px] py-[50px] lg:py-[100px] md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {members?.map((member) => {
        const { _uid, title, image, role } = member.content;
        return (
          <div key={_uid}>
            <Link to={`/${member.full_slug}`}>
              <img
                src={`${image.filename}/m/490x490`}
                alt={title}
                className="shadow-members"
              />

              <h3
                dangerouslySetInnerHTML={{ __html: title }}
                className="uppercase"
              />
              <div className="text-black uppercase role">{role}</div>
            </Link>
          </div>
        );
      })}
      <div>
        <img src="/images/logo-big-white.svg" alt="logo" />
      </div>
    </div>
  );
};

export default Leadership;

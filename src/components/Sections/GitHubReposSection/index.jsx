import { githubRepos } from "../../../constants/githubRepos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faStar, faCodeBranch, faCalendar } from "@fortawesome/free-solid-svg-icons";

const GitHubRepositories = () => {
  return (
    <div className="space-y-3">
      {githubRepos.map((repo, index) => (
        <a
          key={index}
          href={repo.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-4 rounded-lg border border-gray-700 bg-gray-900/30 hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-200 group"
        >
          {/* Header: Name + Language Badge */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <FontAwesomeIcon icon={faGithub} className="text-gray-400 text-sm flex-shrink-0" />
              <h3 className="text-gray-200 font-semibold truncate group-hover:text-green-400 transition-colors">
                {repo.name}
              </h3>
            </div>
            {/* Language Badge */}
            <div className="flex items-center gap-1 ml-2 flex-shrink-0">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: repo.languageColor }}
              />
              <span className="text-xs text-gray-400 text-nowrap">{repo.language}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-400 mb-3 line-clamp-2">
            {repo.description}
          </p>

          {/* Footer: Stats + Topics */}
          <div className="flex items-center justify-between text-xs">
            {/* Stats */}
            <div className="flex items-center gap-4 text-gray-500">
              {repo.stars > 0 && (
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faStar} className="w-3 h-3" />
                  <span>{repo.stars}</span>
                </div>
              )}
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faCalendar} className="w-3 h-3" />
                <span>{repo.updated}</span>
              </div>
            </div>

            {/* Topics */}
            <div className="flex gap-1 flex-wrap justify-end max-w-[40%]">
              {repo.topics.slice(0, 2).map((topic, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-full text-xs bg-gray-800 text-gray-300 border border-gray-700"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default GitHubRepositories;

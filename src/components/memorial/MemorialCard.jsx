import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const speciesIcon = {
  Dog: "fa-solid fa-dog",
  Cat: "fa-solid fa-cat",
  Bird: "fa-solid fa-dove",
  Rabbit: "fa-solid fa-rabbit",
  Fish: "fa-solid fa-fish",
};

const MemorialCard = ({ memorial, linkTo, showActions, isFavourite, onFavourite, onContact }) => {
  const icon = speciesIcon[memorial.species] || "fa-solid fa-paw";

  const card = (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="stat-card group cursor-pointer"
    >
      <div className="flex items-start gap-3.5">
        <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/15 transition-colors">
          <i className={`${icon} text-accent`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-display text-base font-semibold text-foreground truncate">{memorial.petName}</h3>
            {memorial.privacy === 'private' && (
              <i className="fa-solid fa-lock text-muted-foreground text-[10px]" title="Private" />
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">
            {memorial.species}{memorial.breed ? ` · ${memorial.breed}` : ''}
          </p>
          {memorial.passingDate && (
            <p className="text-xs text-muted-foreground mt-0.5">
              <i className="fa-regular fa-calendar text-[10px] mr-1" />
              {new Date(memorial.passingDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3 mt-4 pt-3 border-t border-border">
        <span className="text-xs text-muted-foreground flex items-center gap-1.5">
          <i className="fa-solid fa-fire text-[10px] text-accent" /> {memorial.candleCount}
        </span>
        <span className="text-xs text-muted-foreground flex items-center gap-1.5">
          <i className="fa-solid fa-droplet text-[10px] text-accent" /> {memorial.tearCount}
        </span>
        <span className="text-xs text-muted-foreground flex items-center gap-1.5">
          <i className="fa-regular fa-comment text-[10px]" /> {memorial.memoriesCount}
        </span>
        {showActions && (
          <>
            <button
              type="button"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); onFavourite?.(); }}
              className={`text-xs flex items-center gap-1.5 ${isFavourite ? 'text-accent' : 'text-muted-foreground hover:text-accent'}`}
            >
              <i className={`fa-${isFavourite ? 'solid' : 'regular'} fa-heart text-[10px]`} />
              {isFavourite ? 'Favourited' : 'Favourite'}
            </button>
            <button
              type="button"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); onContact?.(); }}
              className="text-xs text-muted-foreground hover:text-accent flex items-center gap-1.5"
            >
              <i className="fa-solid fa-envelope text-[10px]" /> Contact
            </button>
          </>
        )}
        <span className="ml-auto text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
          View <i className="fa-solid fa-arrow-right text-[10px]" />
        </span>
      </div>
    </motion.div>
  );

  return linkTo ? <Link to={linkTo} className="block">{card}</Link> : card;
};

export default MemorialCard;

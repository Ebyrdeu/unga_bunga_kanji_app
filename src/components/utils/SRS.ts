import {type KanjiOnUsers} from "@prisma/client";

type SrsHelperType = Pick<KanjiOnUsers, "updatedAt" | "srs_stage">
/*
* It's not really an SRS
* In order to be called like that I need to implement SM-2 algorithm
* Which contains things like interval grade EF and quality
* I do not know what a good way to implement quality
* Maybe in future I will do a real one
* But this one make job anyway
* */
export const SRS = ({updatedAt, srs_stage}: SrsHelperType, newStage: number): SrsHelperType => {
  switch (srs_stage) {
    case 0:
      return {
        updatedAt: new Date(updatedAt.getTime() + (4 * 60 * 60 * 1000)),
        srs_stage: newStage,
      };
    case 1:
      return {
        updatedAt: new Date(updatedAt.getTime() + (8 * 60 * 60 * 1000)),
        srs_stage: newStage,
      };

    case 2:
      return {
        updatedAt: new Date(updatedAt.getTime() + (24 * 60 * 60 * 1000)),
        srs_stage: newStage,
      };

    case 3:
      return {
        updatedAt: new Date(updatedAt.getTime() + (2 * 24 * 60 * 60 * 1000)),
        srs_stage: newStage,
      };

    case 4:
      return {
        updatedAt: new Date(updatedAt.getTime() + (7 * 24 * 60 * 60 * 1000)),
        srs_stage: newStage,
      };

    default :
      return {
        updatedAt: updatedAt,
        srs_stage: srs_stage,
      };
  }

};

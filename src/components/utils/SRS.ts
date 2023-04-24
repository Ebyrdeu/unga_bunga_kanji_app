import {type KanjiOnUsers} from '@prisma/client';

type SrsHelperType = Pick<KanjiOnUsers, 'updatedAt' | 'srs_stage'>

/**
 * @description the next review date and new SRS stage based on the current state.
 *
 * @description Note: This function doesn't implement the SM-2 algorithm, which includes interval grade,
 * ease factor, and quality. Instead, it provides a simple way to calculate the next review date
 * and new SRS stage for a given item based on its current SRS stage.
 *
 * @param {SrsHelperType} data - The current state of the item, which includes its `updatedAt` and `srs_stage`.
 * @param {number} newStage - The new SRS stage for the item.
 * @returns {SrsHelperType} - An object containing the next review date and new SRS stage for the item.
 */
export const SRS = ({updatedAt, srs_stage}: SrsHelperType, newStage: number): SrsHelperType => {
  switch (srs_stage) {

      /* Next review date: 4 hours later */
    case 0:
      return {
        updatedAt: new Date(Math.ceil(updatedAt.getTime() / (60 * 60 * 1000)) * (60 * 60 * 1000) + (4 * 60 * 60 * 1000)),
        srs_stage: newStage,
      };

      /* Next review date: 8 hours later */
    case 1:
      return {
        updatedAt: new Date(Math.ceil(updatedAt.getTime() / (60 * 60 * 1000)) * (60 * 60 * 1000) + (8 * 60 * 60 * 1000)),
        srs_stage: newStage,
      };

      /* Next review date: 1 day later */
    case 2:
      return {
        updatedAt: new Date(Math.ceil(updatedAt.getTime() / (60 * 60 * 1000)) * (60 * 60 * 1000) + (24 * 60 * 60 * 1000)),
        srs_stage: newStage,
      };

      /* Next review date: 2 days later */
    case 3:
      return {
        updatedAt: new Date(Math.ceil(updatedAt.getTime() / (60 * 60 * 1000)) * (60 * 60 * 1000) + (2 * 24 * 60 * 60 * 1000)),
        srs_stage: newStage,
      };

      /* Next review date: 1 week later */
    case 4:
      return {
        updatedAt: new Date(Math.ceil(updatedAt.getTime() / (60 * 60 * 1000)) * (60 * 60 * 1000) + (7 * 24 * 60 * 60 * 1000)),
        srs_stage: newStage,
      };

      /* Next review date: 2 weeks later */
    case 5:
      return {
        updatedAt: new Date(Math.ceil(updatedAt.getTime() / (60 * 60 * 1000)) * (60 * 60 * 1000) + (2 * 7 * 24 * 60 * 60 * 1000)),
        srs_stage: newStage,
      };

      /* Next review date: 1 month later */
    case 6:
      return {
        updatedAt: new Date(Math.ceil(updatedAt.getTime() / (60 * 60 * 1000)) * (60 * 60 * 1000) + (4 * 7 * 24 * 60 * 60 * 1000)),
        srs_stage: newStage,
      };

      /* Next review date: 4 months later */
    case 7:
      return {
        updatedAt: new Date(Math.ceil(updatedAt.getTime() / (60 * 60 * 1000)) * (60 * 60 * 1000) + (4 * 4 * 7 * 24 * 60 * 60 * 1000)),
        srs_stage: newStage,
      };

    default :
      return {
        updatedAt: updatedAt,
        srs_stage: srs_stage,
      };
  }

};

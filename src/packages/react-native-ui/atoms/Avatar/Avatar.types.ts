export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps {
  /** URI of the avatar image. Falls back to initials if not provided or on error. */
  uri?: string;
  /** Full name used to generate initials fallback (e.g. "Jane Doe" → "JD"). */
  name?: string;
  size?: AvatarSize;
  /** Background color for the initials fallback circle. Defaults to brand primary. */
  backgroundColor?: string;
}

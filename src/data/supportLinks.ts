/** Add destinations only after the developer verifies ownership and the final URL.
 * An empty catalogue intentionally displays no unverified support/social links. */
export type SupportLink={id:string;label:string;url:string;verifiedOn:string};
export const supportLinks:SupportLink[]=[];
export function verifiedLinks(links:SupportLink[]){return links.filter(link=>{try{const u=new URL(link.url);return /^[a-z0-9-]{1,40}$/.test(link.id)&&link.label.length>0&&link.label.length<=80&&/^\d{4}-\d{2}-\d{2}$/.test(link.verifiedOn)&&!Number.isNaN(Date.parse(link.verifiedOn))&&u.protocol==='https:'&&!u.username&&!u.password}catch{return false}})}

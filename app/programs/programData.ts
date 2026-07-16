export type Program = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  introduction: string;
  activities: string[];
  impact: string;
};

export const programs: Program[] = [
  {
    slug: "baby-bottle-collection",
    title: "Baby Bottle Collection",
    category: "Life",
    summary: "Support life-affirming outreach for mothers, babies, and families in need.",
    introduction: "Council 12906 supports a parish-wide baby bottle collection that gives families a simple way to help protect life and assist mothers facing difficult circumstances. Members distribute bottles, encourage participation, and help gather donations for local pregnancy-support and family-assistance ministries.",
    activities: ["Distribute and collect donation bottles", "Promote respect for life throughout the parish", "Support mothers, infants, and families in need", "Coordinate volunteers and collection weekends"],
    impact: "Every contribution helps provide practical assistance, compassionate guidance, and hope to families choosing life."
  },
  {
    slug: "student-contests",
    title: "Student Contests",
    category: "Youth",
    summary: "Encourage young people to express their faith, citizenship, and creativity.",
    introduction: "The council sponsors student contests that invite young people to reflect on faith, family, patriotism, and service. These programs give students an opportunity to develop their talents while considering how Catholic values shape their lives and communities.",
    activities: ["Promote essay, art, and faith-based contests", "Coordinate entries with local schools and parish programs", "Recognize students for thoughtful and creative work", "Advance qualifying entries when applicable"],
    impact: "Student contests help young people connect their talents with faith, service, and responsible citizenship."
  },
  {
    slug: "coats-for-kids",
    title: "Coats for Kids",
    category: "Community",
    summary: "Provide warm winter coats to children who need them most.",
    introduction: "Through Coats for Kids, Council 12906 helps ensure that children in the Covington area have suitable winter clothing. Knights raise funds, purchase coats, and work with trusted local partners to place them directly into the hands of children and families in need.",
    activities: ["Raise funds for new winter coats", "Purchase coats in appropriate youth sizes", "Partner with schools, churches, and service organizations", "Organize collection and distribution efforts"],
    impact: "A warm coat protects a child’s health, preserves dignity, and reminds families that their community cares."
  },
  {
    slug: "basketball-free-throw-contest",
    title: "Basketball Free Throw Contest",
    category: "Youth",
    summary: "Give young athletes a positive, family-friendly opportunity to compete.",
    introduction: "The Knights of Columbus Free Throw Championship encourages boys and girls to test their basketball skills in a welcoming environment. Council 12906 organizes the local competition and recognizes participants for sportsmanship, effort, and achievement.",
    activities: ["Host a local age-group competition", "Recruit volunteers to register and score participants", "Provide awards and recognition", "Help qualifying winners advance to the next competition level"],
    impact: "The contest promotes healthy activity, confidence, sportsmanship, and positive involvement with families and the community."
  },
  {
    slug: "mothers-and-fathers-day-recognition",
    title: "Mothers and Fathers Day Recognition",
    category: "Family",
    summary: "Honor parents and celebrate their essential vocation within family life.",
    introduction: "Council 12906 recognizes mothers and fathers for the love, sacrifice, and faithful leadership they provide. These observances celebrate the dignity of parenthood and encourage families to pray for and support one another.",
    activities: ["Recognize mothers and fathers during parish observances", "Offer prayer and appreciation for parents", "Support family-centered celebrations", "Promote the Catholic understanding of family life"],
    impact: "Publicly honoring parents strengthens family bonds and reminds the parish of the lasting value of faithful motherhood and fatherhood."
  },
  {
    slug: "seminarian-support",
    title: "Seminarian Support",
    category: "Faith",
    summary: "Encourage and assist men discerning and preparing for the priesthood.",
    introduction: "Council 12906 supports seminarians through prayer, encouragement, personal contact, and financial assistance. Knights recognize that strong vocations are essential to the future of the Church and strive to help seminarians know that they are supported by the Catholic community.",
    activities: ["Pray regularly for seminarians and vocations", "Provide financial gifts or sponsorship assistance", "Send cards and messages of encouragement", "Promote awareness of priestly and religious vocations"],
    impact: "Consistent spiritual and practical support helps seminarians persevere in formation and prepares the way for future parish priests."
  },
  {
    slug: "special-olympics-support",
    title: "Special Olympics Support",
    category: "Community",
    summary: "Serve athletes with intellectual disabilities and support inclusive competition.",
    introduction: "Knights of Columbus councils have a long tradition of supporting Special Olympics. Council 12906 contributes through volunteer service, fundraising, event assistance, and encouragement for athletes and their families.",
    activities: ["Volunteer at Special Olympics events", "Assist with fundraising and community awareness", "Encourage athletes and families", "Support inclusive opportunities for competition and fellowship"],
    impact: "This ministry celebrates the dignity, gifts, courage, and accomplishments of every athlete."
  },
  {
    slug: "spiritual-growth",
    title: "Spiritual Growth",
    category: "Faith",
    summary: "Deepen Catholic faith through prayer, worship, formation, and fraternity.",
    introduction: "Faith is the foundation of Council 12906. The council encourages members and families to grow closer to Christ through the Rosary, reception of the sacraments, communal worship, spiritual formation, and visible participation in parish life.",
    activities: ["Pray the Rosary before council meetings", "Participate in quarterly corporate Communion", "Encourage Mass attendance and sacramental life", "Offer Catholic formation and opportunities for prayer"],
    impact: "Shared prayer and worship strengthen each Knight, his family, the council, and the wider parish community."
  }
];

export function getProgram(slug: string) {
  return programs.find((program) => program.slug === slug);
}

---
layout: page
---
<script setup>
import {
  VPTeamMembers,
  VPTeamPage,
  VPTeamPageSection,
  VPTeamPageTitle,
} from "vitepress/theme";

const coreMembers = [
  {
    avatar: "https://github.com/so1ve.png",
    name: "Ray",
    title: "Creator",
    links: [
      { icon: "github", link: "https://github.com/so1ve" },
      { icon: "twitter", link: "https://twitter.com/so1v3" },
    ],
  },
];
const partners = [];
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Our Team</template>
    <template #lead>
      This is our team.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" />
  <!-- <VPTeamPageSection>
    <template #title>Partners</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection> -->
</VPTeamPage>